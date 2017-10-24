-- Tabela de igrejas

INSERT INTO nazareno_new.churches(district_id, name, date_organization, date_early_ministry, city, state, zip_code, email, phone, address)

SELECT noch.district_id, noch.name, noch.date_organization, noch.early_ministry, noci.name, nost.code, cep, email, phone, address
FROM nazareno_old.churches noch
INNER JOIN nazareno_old.cities noci ON noch.city_id = noci.id
INNER JOIN nazareno_old.states nost ON noci.state_id = nost.id

UPDATE churches SET status = 'O'

-- Tabela de igrejas

