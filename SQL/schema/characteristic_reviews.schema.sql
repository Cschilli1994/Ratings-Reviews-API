-- Table: public.characteristic_reviews

-- DROP TABLE IF EXISTS public.characteristic_reviews;

CREATE TABLE IF NOT EXISTS public.characteristic_reviews
(
    id integer NOT NULL,
    characteristic_id integer NOT NULL,
    review_id integer NOT NULL,
    value integer NOT NULL,
    CONSTRAINT characteristic_reviews_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.characteristic_reviews
    OWNER to schill;
-- Index: characteristic_reviews_characteristic_id_idx

-- DROP INDEX IF EXISTS public.characteristic_reviews_characteristic_id_idx;

CREATE INDEX IF NOT EXISTS characteristic_reviews_characteristic_id_idx
    ON public.characteristic_reviews USING btree
    (characteristic_id ASC NULLS LAST)
    TABLESPACE pg_default;