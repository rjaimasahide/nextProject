import styles from "../page.module.css";

let name: string = "アムロ";
let age: number = 16;

function test1(name: string, age?: number): string{
    return `Hello ${name} age ${age || ""}`
}

let test2 = (name: string, age: number): string => `Hello ${name} age ${age || ""}`

function genBirdInfo(name: string): string[]{
    return name.split(',');
}

function singBirds(birdInfo: (x: string) => string[]): string{
    return birdInfo('hato, kiji')[0] + ' piyopiyo';
}

type Formatter = (a: string) => string;

function printName(firstName: string, formatter: Formatter): string{
    return `${formatter(firstName)}`;
}

//Enum型
enum Direction {
    Up,
    Down,
    Left,
    Right
}

//渡す値はnumber型でもstring型どちらでもよい
type Id = number | string
function printId(id: Id) {
    return `IDは${id}`
}

//
enum PageType {
    viewProfile,
    EditProfile,
    ChangePassward
}
const getTiltle = (type: PageType) => {
    switch (type) {
        case PageType.viewProfile:
            return 'setting'
        case PageType.EditProfile:
            return 'Edit Profile'
        case PageType.ChangePassward:
            return 'change Password'
    default:

    // 決して起きないことをコンパイラに伝えるnever型に代入
    //　これによって仮に将来PageTypeのenum型に定数が新規に追加された際に
    //　コンパイル時にエラーが起きるためバグを未然に防ぐ対応を行うことができる
    const wrongType: never = type
    throw new Error(`${wrongType} is not in PageType`)
    }
}

// Optional Chaining
// [?]をつけると値がなくてもエラーにならない
interface User {
    name: string
    age: number
    social?: {
        facebook: boolean
        twitter: boolean
    }
}
let socialUser: User

//socialUser = {name: 'takuya', age: 25, social: {facebook: true, twitter: true}}
socialUser = {name: 'takuya', age: 25} //こっちもエラーにならない


export default function Home() {
    return (
        <div className={styles.aaa}>
            <p id="testElement">test1</p>
            <p>{test1(name, age)}</p>
            <p>{test2(name, age)}</p>
            <p>{singBirds(genBirdInfo)}</p>
            <p>{Direction.Right}</p>
            <p>{printId(123)}  {printId("aaassss")}</p>
            <p>名前：{socialUser.name} 年齢：{socialUser.age} {socialUser.social?.facebook}</p>
        </div>
    );
}