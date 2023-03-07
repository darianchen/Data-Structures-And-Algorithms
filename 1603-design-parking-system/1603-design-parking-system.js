/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
    constructor(big, medium, small){
        this.big = big;
        this.medium = medium;
        this.small = small;
        this.carTypes = { 1 : this.big, 2 : this.medium, 3:this.small};      

    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.carTypes[carType] > 0){
        this.carTypes[carType]--;
        return true;
    } else{
        return false;
    }    
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

