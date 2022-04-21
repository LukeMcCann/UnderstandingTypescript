# Understanding Decorators

Decorators are a means of giving other developers access to more metadata. Whilst they may or may not be used to implement logic it is important to understand that, whilst they can be nice to have, Decorators are not essential to building the logic of an application.

We define a decorator by defining a ````function````.
Decorators are merely functions themselves, this is imporant
to understand as we also know that in JS classes themselves are
simply functions behind the syntactic sugar ````class```` keyword.

# Class Decorators

When we declare a class decorator in TS it automatically receives the
class we have attached it to as an argument.

<pre>
function Component(targetClass: Function) {
    console.log({ targetClass });
}

@Component
export class TestClass {
    static elementId: string;

    id: number | undefined;

    printId(prefix: string = '') : string {
        return prefix + this.id;
    }
}
</pre>

We can then manipulate our target in any means we wish, as we have
direct access to the ````function```` within our decorator.

<pre>
function Component(targetClass: Function) {
    targetClass.prototype.id = 100;
}

@Component
export class TestClass {
    static elementId: string;

    id: number | undefined;

    printId(prefix: string = '') : string {
        return prefix + this.id;
    }
}

console.log(new TestClass().id);
</pre>


# Factories

We define a ````DecoratorFactory```` by returning a function within
the decorator function. This allows us to expect an object or other
argument as an argument to the decorator itself. In this case it is the inner ````function```` which receives our ````class (function) ````
as the argument.

<pre>
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
</pre>