export default interface Mergeable {
    merge: () => Promise<void>;
}
