



-- CREATE OR REPLACE FUNCTION get_avg(trait_id int)
-- RETURNS float(4)
-- AS
-- $$
-- DECLARE
-- the_avg float(4);
-- BEGIN
-- SELECT AVG(value) INTO the_avg FROM characteristic_reviews WHERE characteristic_reviews.characteristic_id = trait_id;
-- RETURN the_avg;
-- END;
-- $$ LANGUAGE plpgsql;






-- CREATE OR REPLACE FUNCTION get_count(t_f BOOL, product int)
-- RETURNS int
-- AS
-- $$
-- DECLARE
-- the_count int;
-- BEGIN
-- SELECT count(*) INTO the_count FILTER (WHERE recommend = t_f)
-- from reviews WHERE product_id = product;
-- return the_count;

-- END;
-- $$ LANGUAGE plpgsql;




-- CREATE OR REPLACE FUNCTION get_photos(review int)
-- RETURNS json
-- AS
-- $$
-- DECLARE photos json;

-- BEGIN
-- SELECT json_agg(json_build_object(
-- 	'id', id,
-- 	'url', url
-- )) INTO photos
-- FROM review_photos
-- WHERE review_id = review;
-- RETURN photos;

-- END;
-- $$LANGUAGE plpgsql;