function Component(options: { id: string }) {
    return (target: Function & typeof TestClass) => {
        target.elementId = options.id;
    }
}

@Component({
    id: 'Hello World',
})
export class TestClass {
    public static elementId: string;

    id: number | undefined;

    printId(prefix: string = '') : string {
        return prefix + this.id;
    }
}

const t = new TestClass();

console.log(TestClass.elementId);