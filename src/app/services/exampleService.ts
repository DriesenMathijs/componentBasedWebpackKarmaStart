class ExampleService {
    static iid: string = "ExampleService";
    static $inject = ["$http"];

    static baseUrl = "";

    constructor(private $http: ng.IHttpService) { }

    getTitle(): string {
        return "ExampleService title";
    }

    getUserName(): string {
        return "UserNameService";
    }
}

export default ExampleService;