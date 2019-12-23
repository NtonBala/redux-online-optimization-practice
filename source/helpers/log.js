export const log = (message, color, objects) => {
    console.log(
        `%c ${message}`,
        `background: #222; color: #${color}`,
        objects || '',
    );
};
