const RelativeFormatter = new Intl.RelativeTimeFormat('pt', {
    style: 'long',
});

export const DateService = {
    difference(date) {
        const now = new Date();
        let difference = (now.getTime() - new Date(date).getTime()) / 1000,
            type = '';

        if (difference < 60) {
            type = 'seconds';
            difference = Math.round(difference);
        } else if (difference < 60 * 60) {
            type = 'minutes';
            difference = Math.round(difference / 60);
        } else if (difference < 60 * 60 * 24) {
            type = 'hours';
            difference = Math.round(difference / 60 / 60);
        } else {
            type = 'days';
            difference = Math.round(difference / 60 / 60 / 24);
        }

        return {
            difference,
            type,
        };
    },
    relativeTime(date) {
        const { difference, type } = this.difference(date);
        return RelativeFormatter.format(-difference, type);
    },
};
