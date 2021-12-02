-- Table: public.characteristics

-- DROP TABLE IF EXISTS public.characteristics;

CREATE TABLE IF NOT EXISTS public.characteristics
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(60) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT characteristics_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.characteristics
    OWNER to postgres;
-- Index: characteristics_product_id_idx

-- DROP INDEX IF EXISTS public.characteristics_product_id_idx;

CREATE INDEX IF NOT EXISTS characteristics_product_id_idx
    ON public.characteristics USING btree
    (product_id ASC NULLS LAST)
    TABLESPACE pg_default;

