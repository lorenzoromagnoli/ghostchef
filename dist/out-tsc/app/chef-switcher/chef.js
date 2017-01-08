var Chef = (function () {
    function Chef(name) {
        this.name = name;
    }
    Chef.prototype.activate = function () {
        this.isActive = true;
        console.log("this.name");
    };
    Chef.prototype.disable = function () {
        this.isActive = false;
    };
    Chef.prototype.toggleActive = function () {
        this.isActive = !this.isActive;
    };
    return Chef;
}());
export { Chef };
//# sourceMappingURL=../../../../src/app/chef-switcher/chef.js.map