/** @odoo-module **/

import * as PosLoyalty from "@pos_loyalty/../tests/tours/PosLoyaltyTourMethods";
import * as ProductScreen from "@point_of_sale/../tests/tours/helpers/ProductScreenTourMethods";
import * as Dialog from "@point_of_sale/../tests/tours/helpers/DialogTourMethods";
import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add("PosLoyaltyValidity1", {
    test: true,
    url: "/pos/web",
    steps: () =>
        [
            // First tour should not get any automatic rewards

            Dialog.confirm("Open session"),
            ProductScreen.clickHomeCategory(),

            // Not valid -> date
            ProductScreen.addOrderline("Whiteboard Pen", "5"),
            PosLoyalty.isRewardButtonHighlighted(false),
            PosLoyalty.finalizeOrder("Cash", "20"),
        ].flat(),
});

registry.category("web_tour.tours").add("PosLoyaltyValidity2", {
    test: true,
    url: "/pos/web",
    steps: () =>
        [
            // Second tour

            ProductScreen.clickHomeCategory(),

            // Valid
            ProductScreen.addOrderline("Whiteboard Pen", "5"),
            PosLoyalty.hasRewardLine("90% on the cheapest product", "-2.88"),
            PosLoyalty.finalizeOrder("Cash", "20"),

            // Not valid -> usage
            ProductScreen.addOrderline("Whiteboard Pen", "5"),
            PosLoyalty.isRewardButtonHighlighted(false),
            PosLoyalty.finalizeOrder("Cash", "20"),
        ].flat(),
});
