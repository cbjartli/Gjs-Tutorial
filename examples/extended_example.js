#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

class MyWindow extends Gtk.Window {
    constructor() {
        super({ title: "Hello World" });
        this.button = new Gtk.Button({ label: "Click here" });
        this.button.connect("clicked", MyWindow.onButtonClicked);
        this.add(this.button);
    }

    static onButtonClicked() {
        print("Hello World");
    }   
}

GObject.registerClass(MyClass);

let win = new MyWindow();
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();
