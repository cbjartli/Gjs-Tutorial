#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
print(Gtk);
const Lang = imports.lang;

Gtk.init(null, 0);

let win = new Gtk.Window();
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();
