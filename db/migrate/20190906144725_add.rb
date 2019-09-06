class Add < ActiveRecord::Migration[5.2]
  def change
    create_table :paiges do |t|
      t.text :bio

      t.timestamps
    end
  end
end
