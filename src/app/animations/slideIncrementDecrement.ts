import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const slideIncDec =  trigger("slideFormTabInOut", [
                                transition(":increment", group([
                                    query(":enter", [
                                        style({
                                        transform: "translateX(100%)",
                                        }),
                                        animate(".5s ease-in-out", style({
                                        transform: "translateX(0%)",
                                        }))
                                    ], {optional: true}),
                                    query(":leave", [
                                        style({
                                        transform: "translateX(0%)",
                                        }),
                                        animate(".5s ease-in-out", style({
                                        transform: "translateX(-100%)",
                                        }))
                                    ], {optional: true})
                                ])),
                                transition(":decrement", group([
                                    query(":enter", [
                                        style({
                                        transform: "translateX(-100%)",
                                        }),
                                        animate(".5s ease-in-out", style({
                                        transform: "translateX(0%)",
                                        }))
                                    ], {optional: true}),
                                    query(":leave", [
                                        style({
                                        transform: "translateX(0%)",
                                        }),
                                        animate(".5s ease-in-out", style({
                                        transform: "translateX(100%)",
                                        }))
                                    ], {optional: true})
                                ]))
                            ])