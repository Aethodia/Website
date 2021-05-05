////////////////////////////////////////////////////////////////////////////////
/** Gets the number of seconds since the UNIX epoch.
 * @param datetime The `string` or `Date` to convert to seconds.
 * @returns the number of seconds elapsed between the UNIX epoch and `datetime`.
 */
 export default function getSecondsFromUnixEpoch(datetime: Date|string): number {
    return Math.round((new Date(datetime)).getTime() / 1000); //TODO: Breaks down when timezones are brought into the picture!
}
