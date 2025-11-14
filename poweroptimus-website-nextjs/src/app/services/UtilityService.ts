export const getReadableDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    }).replace(/ /g, ' ');

    return formattedDate;
}

export function getFileNameFragments(fileName: string): { name: string, extension: string } {
    const name = fileName.substring(0, fileName.lastIndexOf('.'));
    const extension = fileName.substring(fileName.lastIndexOf('.') + 1);
    return { name, extension }
}

export function isValidEmail(email: string) {
    const emailRegex = /^(?=.{1,256})(?=.{1,64}@.{1,255}$)[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
}
