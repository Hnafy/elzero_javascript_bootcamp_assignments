function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i=startYear;i<=endYear;i++){
        document.write(`<option>${i}</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);