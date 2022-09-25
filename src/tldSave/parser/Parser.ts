export default interface Parser<SerializedType = {}, ResultType = {}> {
  fromField: string | undefined;
  isJson: boolean | undefined;
  isCompressed: boolean | undefined;
  parse(data: Optional<SerializedType>): Optional<ResultType>;
  serialize(data: Optional<ResultType>): Optional<SerializedType>;
}
