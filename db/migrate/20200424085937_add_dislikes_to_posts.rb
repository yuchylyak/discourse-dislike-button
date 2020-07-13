# frozen_string_literal: true

class AddDislikesToPosts < ActiveRecord::Migration[6.0]
  def up
    add_column :posts, :dislike_count, :integer, default: 0
    add_column :posts, :disclikes_score, :integer, default: 0

    add_index :posts, :dislike_count
    add_index :posts, :disclikes_score

    PostActionType.create(id: 15, position: 3, name_key: 'dislike', is_flag: false, icon: 'thumbs-down')
  end

  def down
    remove_index :posts, :dislike_count
    remove_index :posts, :disclikes_score

    remove_column :posts, :dislike_count
    remove_column :posts, :disclikes_score

    PostActionType.find_by(name_key: 'dislike')&.destroy
  end
end
