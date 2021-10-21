export default function TextCounter({ limit = 2, ...props }) {
    return (
        <div>
            <input type={'text'} maxLength={limit} />
        </div>
    );
}
