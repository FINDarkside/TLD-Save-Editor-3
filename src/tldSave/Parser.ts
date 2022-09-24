export default interface Parser<SerializedType = {}, ResultType = {}> {
  fromField: string | undefined;
  isJson: boolean | undefined;
  isCompressed: boolean | undefined;
  parse(data: SerializedType): ResultType;
  serialize(data: ResultType): SerializedType;
}
