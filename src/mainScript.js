function myFunction() {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const mainSheet = doc.getSheetByName("Main");

    if (!mainSheet) {
        throw new Error('Де головний шит, довбень?!');
    }

    const allItems = getAllItems();
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
        const { energyRange } = mainVariables;

        sheet.getRange(energyRange).setValue(energy);
        learnedSkills.forEach(skill => sheet.getRange(skills[skill]).setBackground('#FFC300'));

        console.warn(notes.length > 0 ? notes : 'GL HF');
    }
}
