# Interface VS Type

interface User {
  firstname: string;
  lastname?: string;
}

# VS 

type User = {
  firstname: string,
  lastname?: string,
};

const getFullName = (user: User): string => {
  return user.firstname;
};

## Difference
1. extra "="
2. theres no inharitence with Type (Type can never change, so we cannot add new properties, but we can create new type)
3. we cant declare the same type

==========================
## using `Interface` we can do:
interface LoggedUser extends User {
  id: number;
}

const user: LoggedUser = {
  firstname: '',
  lastname: '',
  id: 34,
};

## using `Type` we can do:

type LoggedUser = User & {
  id: number,
};

and that will be the same.

=========================
## using `Interface` we can do:
interface User {
  firstname: string;
  lastname?: string;
}
interface User {
  id: number;
}
and its valid with 3 params

## using `Type` we can't do:
type User = {
  firstname: string,
  lastname?: string,
};
type User = {
  id: number,
};
we get: Duplicate identifier User.