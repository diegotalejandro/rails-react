# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_24_071854) do

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "nombre"
    t.integer "telefono"
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["nombre"], name: "index_admins_on_nombre", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
    t.index ["telefono"], name: "index_admins_on_telefono", unique: true
  end

  create_table "asistencia", force: :cascade do |t|
    t.string "nombre"
    t.string "apellido"
    t.string "correo"
    t.integer "telefono"
    t.string "institucion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_asistencia_on_user_id"
  end

  create_table "propuesta", force: :cascade do |t|
    t.string "nombre"
    t.string "titulo"
    t.string "correo"
    t.string "organizacion"
    t.string "resumen"
    t.string "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "reviser_id"
    t.integer "rating"
    t.index ["reviser_id"], name: "index_propuesta_on_reviser_id"
    t.index ["user_id"], name: "index_propuesta_on_user_id"
  end

  create_table "revisers", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "telefono"
    t.string "nombre"
    t.index ["email"], name: "index_revisers_on_email", unique: true
    t.index ["nombre"], name: "index_revisers_on_nombre", unique: true
    t.index ["reset_password_token"], name: "index_revisers_on_reset_password_token", unique: true
    t.index ["telefono"], name: "index_revisers_on_telefono", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "nombre"
    t.integer "telefono"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["nombre"], name: "index_users_on_nombre", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["telefono"], name: "index_users_on_telefono", unique: true
  end

end
