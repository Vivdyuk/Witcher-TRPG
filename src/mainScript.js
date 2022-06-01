function myFunction() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const mainSheet = doc.getSheetByName("Main");

  if (!mainSheet) {
    throw new Error('Де головний шит, довбень?!');
  }

  const allItems = getAllItems();
  const professions = getProfessions();
  const { raceRange, professionRange } = mainVariables;
  const raceValue = mainSheet.getRange(raceRange).getValue();
  const professionValue = mainSheet.getRange(professionRange).getValue();

  if ((raceValue === 'Відьмак' && professionValue !== 'Відьмак')
    || (raceValue !== 'Відьмак' && professionValue === 'Відьмак')) {
    throw new Error('Відьмак він і в Темерії відьмак, довбень!!!')
  }

  console.log(`Вітаю, ти ${raceValue}-${professionValue}`);

  setProfessionSpecies(professionValue, mainSheet);



  function setProfessionSpecies(profession, sheet) {
    const { energy, inventory, learnedSkills, notes } = professions[profession];
    const { energyRange, rangesForBuilder } = mainVariables;

    sheet.getRange(energyRange).setValue(energy);

    setStartInventory(inventory, rangesForBuilder);

    learnedSkills.forEach(skill => sheet.getRange(skills[skill]).setBackground('#FFC300'));
    console.log(notes.length > 0 ? notes : "GL HF")
  }

  function setStartInventory(inventory, rangesForBuilder) {
    const sortedItems = new LayoutBuilder({}, {}, {}, {}, {}, {}, {}, {}, {});
    const {
      weaponsRange,
      ammosRange,
      armorsRange,
      alchemyRange,
      shieldsRange,
      toolsRange,
      componentsRange,
      vehiclesRange,
      itemsRange,
    } = rangesForBuilder;
    const ranges = new LayoutBuilder(weaponsRange,
      ammosRange,
      armorsRange,
      alchemyRange,
      shieldsRange,
      toolsRange,
      componentsRange,
      vehiclesRange,
      itemsRange);

    inventory.forEach(item => {
      const currentItem = allItems[item]

      if (currentItem instanceof Weapon) {
        sortedItems.Weapons[item] = currentItem;
        return;
      }
      if (currentItem instanceof Ammo) {
        sortedItems.Ammos[item] = currentItem;
        return;
      }
      if (currentItem instanceof Armor) {
        sortedItems.Armors[item] = currentItem;
        return;
      }
      if (currentItem instanceof Alchemy) {
        sortedItems.Alchemys[item] = currentItem;
        return;
      }
      if (currentItem instanceof Shield) {
        sortedItems.Shields[item] = currentItem;
        return;
      }
      if (currentItem instanceof Component) {
        sortedItems.Components[item] = currentItem;
        return;
      }
      if (currentItem instanceof Vehicle) {
        sortedItems.Vehicles[item] = currentItem;
        return;
      }
      if (currentItem instanceof Tool) {
        sortedItems.Tools[item] = currentItem;
        return;
      }

      sortedItems.Items[item] = currentItem;
    })

    for (const category in ranges) {
      // Не ітеруватись по рейнджу, а взяти старі дані, в них замінити масиви. і буде ляля

      const categoryRange = ranges[category];

      publishItems(categoryRange, sortedItems[category]);

    };
  }

  function publishItems(rangeA1, item) {
    const range = mainSheet.getRange(rangeA1);
    const rangeValues = range.getValues();

    const startIndex = rangeValues.findIndex(row => row.every(cell => cell.length === 0));
    if (startIndex < 0 ) {
      return;
    }

    const itemValues = Object.values(item);

    for (let i = startIndex; i < itemValues.length; i++) {
      const currentItem = itemValues[i];

      if (currentItem instanceof Weapon) {
        rangeValues[i] = [
          currentItem.name,
          currentItem.accuracy,
          currentItem.damage,
          currentItem.durability,
          currentItem.hands,
          currentItem.distance,
          currentItem.effects,
          currentItem.stealth,
          '',
          currentItem.buff,
          '',
          '',
          currentItem.weight
        ]
      } else if (currentItem instanceof Armor || currentItem instanceof Shield) {
        rangeValues[i] = [
          currentItem.name,
          '',
          currentItem.durability,
          currentItem.rarity,
          currentItem.buff,
          currentItem.effects,
          '',
          '',
          '',
          currentItem.movesModifier,
          currentItem.weight,
          currentItem.price,
          ''
        ]
      } else {
        rangeValues[i] = [
          currentItem.name,
          '',
          currentItem.notes,
          '',
          '',
          '',
          '',
          '',
          currentItem.price,
          1,
          currentItem.weight,
        ]
      }
    }

    range.setValues(rangeValues);
    console.log(`Set to ${rangeA1}`)
  }
}
