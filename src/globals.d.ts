type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
type IsAny<T> = IfAny<T, true, never>;

type CastAny<T, CastType> = true extends IsAny<T> ? CastType : T;

type Optional<T> = T | null | undefined;
