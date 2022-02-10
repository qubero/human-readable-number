module.exports = function toReadable (number) {
    const words = [
        [
            'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ],
        [
            'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ]
    ];

    const createTens = (number) => {
        if (number < 20) {
            return words[0][number];
        }

        const numFloor = Math.floor(number / 10);
        const numReminder = number % 10;

        const ten = words[1][numFloor - 2];
        const digit = numReminder ? words[0][numReminder] : ``;

        return [ten, digit].join(` `).trim();
    };

    if (number < 100) {
        return createTens(number);
    } else {
        const numFloor = Math.floor(number / 100);
        const numReminder = number % 100;

        let hundred = numFloor ? `${words[0][numFloor]} hundred` : ``;
        let tens = numReminder ? createTens(numReminder) : ``;

        return [hundred, tens].join(` `).trim();
    }
}
