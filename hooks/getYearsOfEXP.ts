
const getYearsOfEXP = () => {
    const foundingYear = 2018
    const currentYear = new Date().getFullYear()
    const yearsOfExcellence = currentYear - foundingYear + 1
    return { foundingYear, yearsOfExcellence };
};

export default getYearsOfEXP;