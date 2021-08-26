class Brand<ActiveRecord::Base
    has_many :rolls
    has_many :formats, through: :rolls
end