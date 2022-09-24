export default interface Parser<
  SerializedType = Partial<{}> | undefined,
  ResultType = Partial<{}> | undefined
> {
  fromField: string | undefined;
  isJson: boolean | undefined;
  isCompressed: boolean | undefined;
  parse(data: SerializedType): ResultType;
  serialize(data: ResultType): SerializedType;
}
