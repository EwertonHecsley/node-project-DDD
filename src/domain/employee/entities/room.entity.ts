import Entity from '../../../utils/entities/generic.entity';
import Identity from '../../../utils/entities/generic.identity';

type RommType = {
    name: string;
    price: string;
    image: string;
    hasWifi: boolean;
    hasAir: boolean;
    hasKitchen: boolean;
    isPetFriendly: boolean;
    isAvailable: boolean;
}

export default class Room extends Entity<RommType> {

    constructor(data: RommType, id?: Identity) {
        super(data, id);
    }

    get name(): string {
        return this.attributes.name;
    }

    get price(): string {
        return this.attributes.price;
    }

    get image(): string {
        return this.attributes.image;
    }

    get hasWifi(): boolean {
        return this.attributes.hasWifi;
    }

    get hasAir(): boolean {
        return this.attributes.hasAir;
    }

    get hasKitchen(): boolean {
        return this.attributes.hasKitchen;
    }

    get isPetFriendly(): boolean {
        return this.attributes.isPetFriendly;
    }

    get isAvailable(): boolean {
        return this.attributes.isAvailable;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set price(price: string) {
        this.attributes.price = price;
    }

    set image(image: string) {
        this.attributes.image = image;
    }

    set hasWifi(hasWifi: boolean) {
        this.attributes.hasWifi = hasWifi;
    }

    set hasAir(hasAir: boolean) {
        this.attributes.hasAir = hasAir;
    }

    set hasKitchen(hasKitchen: boolean) {
        this.attributes.hasKitchen = hasKitchen;
    }

    set isPetFriendly(isPetFriendly: boolean) {
        this.attributes.isPetFriendly = isPetFriendly;
    }

    set isAvailable(isAvailable: boolean) {
        this.attributes.isAvailable = isAvailable;
    }
}