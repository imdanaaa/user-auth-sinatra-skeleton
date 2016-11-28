class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, :hashed_password, null: false
      t.string :email, uniqueness: true, null: false

      t.timestamps null: false
    end
  end
end
