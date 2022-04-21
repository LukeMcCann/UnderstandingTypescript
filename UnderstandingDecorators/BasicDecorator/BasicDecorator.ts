function Component(targetClass: Function) {
    console.log(targetClass);
}

@Component
export class TestClass {
    static elementId: string;

    id: number | undefined;

    printId(prefix: string = '') : string {
        return prefix + this.id;
    }
}