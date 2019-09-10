class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :paiges do |t|
      t.string :name
      t.text :bio
      t.string :video
      t.string :recording
      t.string :outside_source_link
      t.string :photos
      t.string :specialties


      t.timestamps
    end
  end
end
