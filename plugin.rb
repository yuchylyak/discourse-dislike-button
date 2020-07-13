# frozen_string_literal: true

# name: dislike-button
# about: Used for disliking posts
# version: 1.0.0
# authors: Zero Dev

after_initialize do
  class ::PostActionType < ActiveRecord::Base
    def self.types
      unless @types
        @types = Enum.new(
          bookmark: 1,
          like: 2,
          dislike: 15
        )
        @types.merge!(flag_settings.flag_types)
      end

      @types
    end
  end
end
