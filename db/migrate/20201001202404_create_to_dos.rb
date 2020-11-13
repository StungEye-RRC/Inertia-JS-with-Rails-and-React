class CreateToDos < ActiveRecord::Migration[6.0]
  def change
    create_table :to_dos do |t|
      t.text :description
      t.boolean :completed

      t.timestamps
    end
  end
end
