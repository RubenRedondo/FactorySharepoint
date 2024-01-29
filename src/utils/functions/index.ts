export const generateIdWithName = (name: string): string => {

    const getInitials = (name: string) =>
        name.split(' ').map((word) => word[0].toUpperCase()).join('');

    const generateRandomNumber = (length: number) => {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const initials = getInitials(name);
    const randomNumber = generateRandomNumber(4); // Generar un número aleatorio de 4 dígitos

    return `${initials}-${randomNumber}`;
}


export const getCurrentDate = (): string => {
    const today = new Date();

    let day = today.getDate().toString();
    let month = (today.getMonth() + 1).toString(); // Enero es 0
    const year = today.getFullYear();

    // Añadir un cero al principio si el día o el mes es menor a 10
    day = day.length < 2 ? '0' + day : day;
    month = month.length < 2 ? '0' + month : month;

    return `${day}/${month}/${year}`;
};

