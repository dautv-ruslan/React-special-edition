function concat(str1: string, str2: string): string {

    return `${str1} ${str2}`;
}

console.log(concat("Hello", "World"));

type str_array = {howIDoIt: string, someArray: (string | number)[]};

interface HomeTask {
    howIDoIt: string;
    someArray: (string | number)[];
    withData: [str_array];
}

const MyHometask: HomeTask = {
    howIDoIt: "I Do It Well",
    someArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Well", someArray: ["string one", 23] }],
}

console.log(MyHometask);

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (sum: U, el: T) => U): U;
}

const tsArr: Array<number> = [1,2,3,4];

tsArr.reduce((sum: number, i: number) => sum = sum + i);