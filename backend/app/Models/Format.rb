class Format<ActiveRecord::Base
    has_many :rolls
    has_many :brands, through: :rolls
end