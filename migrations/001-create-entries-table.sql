CREATE TABLE entries (
    id BIGSERIAL UNIQUE,
    wins character varying(10000),
    lessons_learned character varying(10000),
    goals character varying(10000)
)