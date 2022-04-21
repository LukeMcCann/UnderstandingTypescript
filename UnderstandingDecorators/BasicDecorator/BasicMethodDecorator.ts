function Component(options: { id: string }) {
    return (target: Function & typeof TestClass) => {
        target.elementId = options.id;
    }
}

function MethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log({
        target,
        propertyKey,
        descriptor,
    })
}
@Component({
    id: 'Hello World',
})
export class TestClass {
    public static elementId: string;

    id: number | undefined;

    @MethodDecorator
    printId(prefix: string = '') : string {
        return prefix + this.id;
    }
}

const t = new TestClass();

console.log(TestClass.elementId);
