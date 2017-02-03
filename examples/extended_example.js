#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

Gtk.init(null);

const MyWindow = new Lang.Class({
    Name: 'MyWindow',
    Extends: Gtk.Window,

    _init: function() {
        this.parent({title: "Hello World"});
        this.button = new Gtk.Button({label: "Click here"});
        this.button.connect("clicked", this.onButtonClicked);
        this.add(this.button);
    },

    onButtonClicked: function() {
        print("Hello World");
    }
});

let win = new MyWindow();
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();
