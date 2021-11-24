CREATE INDEX ON reviews (product_id);
CREATE INDEX ON reviews (recommend);

CREATE INDEX ON characteristics (product_id);



CREATE INDEX ON characteristic_reviews (characteristic_id);

CREATE INDEX ON review_photos (review_id);