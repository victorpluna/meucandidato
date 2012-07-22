# -*- coding: utf-8 -*-
from django.conf.urls import patterns, include, url
from django.views.generic.simple import direct_to_template
from meucandidato import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from aplicativo.views import app_home,candidato_interna,escolher_municipio,mostrar_municipios
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', direct_to_template, {
        'template': 'home.html'
    }, name='home'),
    url(r'^app/$', app_home, name='app_home'),
    url(r'^app/(?P<cargo>\S+)/$', app_home, name='app_home_cargo'),
    url(r'^candidato/(?P<candidato_id>\d+)/$', candidato_interna, name='candidato_interna'),
    url(r'^fandjango/', include('fandjango.urls')),
    url(r'^escolherMunicipio/(?P<municipio>\d+)/$', escolher_municipio, name='escolher_municipio'),
    url(r'^mostrarMunicipios/$', mostrar_municipios, name='mostrar_municipios'),
    url(r'^api/', include('api.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
	urlpatterns += staticfiles_urlpatterns()
	urlpatterns += patterns('',
						url(r'^media/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.MEDIA_ROOT}),
						)