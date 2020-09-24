export class Player {
    position: number;
    archetype: string;
    primary: string;
    secondary: string;
    key_badges: string;
    secondary_badges: string;
    hof_badge_count: number;
    gold_badge_count: number;
    silver_badge_count: number;
    bronze_badge_count: number;
    attributes: Attributes;
    total_att_initial: number;
    total_att_w_caps: number;
    overall_rating: number;
    badge_efficiency: number;
    attribute_efficiency: number;
    overall_rating_helper: number;
    badge_efficiency_helper: number;
    attribute_efficiency_helper: number;

    constructor(
        position: number,
        archetype: string,
        primary: string,
        secondary: string,
        key_badges: string,
        secondary_badges: string,
        attribute_array: [number, number][]) {
            console.log("Creating player!")
            this.position = position;
            this.archetype = archetype;
            this.primary = primary;
            this.secondary = secondary;
            this.key_badges = key_badges;
            this.secondary_badges = secondary_badges;
            this.attributes = new Attributes(attribute_array);
            this.total_att_initial = this.attributes.get_total_attribute_initial();
            this.total_att_w_caps = this.attributes.get_total_attribute_w_caps();
        }
}

class Attributes {
    layups: [number, number];
    dunks: [number, number];
    mid_range: [number, number];
    three_pt: [number, number];
    ball_handling: [number, number];
    passing: [number, number];
    post_offense: [number, number];
    rebounding: [number, number];
    steals: [number, number];
    blocks: [number, number];
    vertical: [number, number];
    lat_quickness: [number, number];
    speed: [number, number];
    accel: [number, number];
    strength: [number, number];
    stamina: [number, number];

    constructor(attribute_array: [number, number][]) {
        console.log("Creating attributes object!");
        this.layups = attribute_array[0];
        this.dunks = attribute_array[1];
        this.mid_range = attribute_array[2];
        this.three_pt = attribute_array[3];
        this.ball_handling = attribute_array[4];
        this.passing = attribute_array[5];
        this.post_offense = attribute_array[6];
        this.rebounding = attribute_array[7];
        this.steals = attribute_array[8];
        this.blocks = attribute_array[9];
        this.vertical = attribute_array[10];
        this.lat_quickness = attribute_array[11];
        this.speed = attribute_array[12];
        this.accel = attribute_array[13];
        this.strength = attribute_array[14];
        this.stamina = attribute_array[15];
    }

    get_total_attribute_initial() {
        console.log("Calculating total attributes initial");
        let total = 0;
        console.log(Object.values(this))
        for (let attribute_tuple of Object.values(this)) {
            console.log(attribute_tuple)
            total = total + attribute_tuple[0]
        }
        return total
    }

    get_total_attribute_w_caps() {
        console.log("Calculating total attributes with caps");
        let total = 0;
        for (let attribute_tuple of Object.values(this)) {
            total = total + attribute_tuple[1]
        }
        return total
    }

}