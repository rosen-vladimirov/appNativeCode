const Observable = require("tns-core-modules/data/observable").Observable;
const platformModule = require("tns-core-modules/platform");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
        if (platformModule.isAndroid) {
            const myClassInstance = new com.example.myapplication.MyClass();
            myClassInstance.logInfo();
        } else if (platformModule.isIOS) {
            const myClassInstance = new MyClass();
            myClassInstance.logInfo();
        }
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
