class RemoveConfirmationTokenAndRememberTokenFromUsers < ActiveRecord::Migration
  def up
    remove_column :users, :confirmation_token
    remove_column :users, :remember_token
  end

  def down
    add_column :users, :confirmation_token
    add_column :users, :remember_token
  end
end
