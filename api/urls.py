from django.conf.urls.defaults import *
from piston.resource import Resource
from api.handlers import CandidatoHandler, MunicipioHandler

candidato_resource = Resource(CandidatoHandler)
municipio_resource = Resource(MunicipioHandler)


urlpatterns = patterns('',
	(r'^candidato/', candidato_resource),
	(r'^municipios/(?P<sigla>[^/]+)', municipio_resource),
	)