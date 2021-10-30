// https://stackoverflow.com/a/55541672/2716059
type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
type IsAny<T> = IfAny<T, true, never>;

type CastAny<T, CastType> = IsAny<T> extends true ? CastType : T;
